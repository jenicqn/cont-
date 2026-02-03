import { useAuth } from "@getmocha/users-service/react";
import { ArrowLeft, Plus, Minus, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  category_id: number;
  name: string;
  unit: string;
  minimum_stock: number;
}

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface ProductCount {
  productId: number;
  quantityClosed: number;
  quantityOpen: number;
}

export default function CategoryDetailsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [counts, setCounts] = useState<Map<number, ProductCount>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryAndProducts();
  }, [categoryId]);

  const fetchCategoryAndProducts = async () => {
    try {
      const [categoryRes, productsRes] = await Promise.all([
        fetch("/api/categories"),
        fetch(`/api/products/category/${categoryId}`),
      ]);

      const categoriesData = await categoryRes.json();
      const productsData = await productsRes.json();

      const currentCategory = categoriesData.find(
        (c: Category) => c.id === Number(categoryId)
      );

      setCategory(currentCategory || null);
      setProducts(productsData);

      // Initialize counts
      const initialCounts = new Map<number, ProductCount>();
      productsData.forEach((product: Product) => {
        initialCounts.set(product.id, {
          productId: product.id,
          quantityClosed: 0,
          quantityOpen: 0,
        });
      });
      setCounts(initialCounts);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateCount = (productId: number, field: "quantityClosed" | "quantityOpen", delta: number) => {
    setCounts((prev) => {
      const newCounts = new Map(prev);
      const current = newCounts.get(productId) || {
        productId,
        quantityClosed: 0,
        quantityOpen: 0,
      };
      
      const newValue = Math.max(0, current[field] + delta);
      newCounts.set(productId, { ...current, [field]: newValue });
      return newCounts;
    });
  };

  const setCountValue = (productId: number, field: "quantityClosed" | "quantityOpen", value: string) => {
    const numValue = parseFloat(value) || 0;
    setCounts((prev) => {
      const newCounts = new Map(prev);
      const current = newCounts.get(productId) || {
        productId,
        quantityClosed: 0,
        quantityOpen: 0,
      };
      newCounts.set(productId, { ...current, [field]: Math.max(0, numValue) });
      return newCounts;
    });
  };

  const saveProductCount = async (productId: number) => {
    const count = counts.get(productId);
    if (!count) return;

    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const totalQuantity = count.quantityClosed + count.quantityOpen;

    try {
      const response = await fetch("/api/inventory-counts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: productId,
          user_id: user?.id,
          employee_name: user?.email?.split("@")[0] || "Funcionário",
          quantity_closed: count.quantityClosed,
          quantity_open: count.quantityOpen,
          total_quantity: totalQuantity,
          unit: product.unit,
          count_date: new Date().toISOString().split("T")[0],
          count_time: new Date().toTimeString().split(" ")[0],
        }),
      });

      if (response.ok) {
        alert("Contagem salva com sucesso!");
        setCounts((prev) => {
          const newCounts = new Map(prev);
          newCounts.set(productId, {
            productId,
            quantityClosed: 0,
            quantityOpen: 0,
          });
          return newCounts;
        });
      }
    } catch (error) {
      console.error("Error saving count:", error);
      alert("Erro ao salvar contagem");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <p className="text-gray-600">Categoria não encontrada</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-5xl">{category.icon}</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {category.name}
                </h1>
                <p className="text-sm text-gray-500">{products.length} produtos</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Products List */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {products.map((product) => {
            const count = counts.get(product.id) || {
              quantityClosed: 0,
              quantityOpen: 0,
            };
            const total = count.quantityClosed + count.quantityOpen;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md border-2 border-orange-100 p-6"
              >
                <div className="flex flex-col gap-6">
                  {/* Product Name */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">Unidade: {product.unit}</p>
                  </div>

                  {/* Counters */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Closed Quantity */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Quantidade Fechada
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateCount(product.id, "quantityClosed", -1)
                          }
                          className="w-12 h-12 bg-orange-100 hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-6 h-6 text-orange-600" />
                        </button>
                        <input
                          type="number"
                          value={count.quantityClosed}
                          onChange={(e) =>
                            setCountValue(
                              product.id,
                              "quantityClosed",
                              e.target.value
                            )
                          }
                          className="flex-1 text-center text-2xl font-bold border-2 border-orange-200 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                        />
                        <button
                          onClick={() =>
                            updateCount(product.id, "quantityClosed", 1)
                          }
                          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Open Quantity */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Quantidade Aberta
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateCount(product.id, "quantityOpen", -1)
                          }
                          className="w-12 h-12 bg-orange-100 hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-6 h-6 text-orange-600" />
                        </button>
                        <input
                          type="number"
                          value={count.quantityOpen}
                          onChange={(e) =>
                            setCountValue(
                              product.id,
                              "quantityOpen",
                              e.target.value
                            )
                          }
                          className="flex-1 text-center text-2xl font-bold border-2 border-orange-200 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                        />
                        <button
                          onClick={() =>
                            updateCount(product.id, "quantityOpen", 1)
                          }
                          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Total and Save */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="text-3xl font-bold text-orange-600">
                        {total.toFixed(2)} {product.unit}
                      </p>
                    </div>
                    <button
                      onClick={() => saveProductCount(product.id)}
                      disabled={total === 0}
                      className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                    >
                      <Save className="w-6 h-6" />
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
