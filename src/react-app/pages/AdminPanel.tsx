import { useAuth } from "@getmocha/users-service/react";
import { Users, FolderTree, Package, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserManagement from "../components/UserManagement";
import CategoryManagement from "../components/CategoryManagement";
import ProductManagement from "../components/ProductManagement";

type AdminSection = "users" | "categories" | "products" | null;

export default function AdminPanel() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<AdminSection>(null);

  if (!user) {
    navigate("/login");
    return null;
  }

  const adminSections = [
    {
      id: "users" as AdminSection,
      title: "Administrar Acessos",
      description: "Criar, editar e excluir usuários",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:border-blue-400",
    },
    {
      id: "categories" as AdminSection,
      title: "Administrar Categorias",
      description: "Criar, editar e excluir categorias",
      icon: FolderTree,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:border-green-400",
    },
    {
      id: "products" as AdminSection,
      title: "Administrar Itens",
      description: "Criar, editar e excluir produtos",
      icon: Package,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:border-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => activeSection ? setActiveSection(null) : navigate("/")}
              className="p-2 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Painel Administrativo
              </h1>
              <p className="text-xs text-gray-500">Gerenciamento do Sistema</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!activeSection ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Selecione uma Área
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminSections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 ${section.hoverColor} hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div>
            {activeSection === "users" && <UserManagement />}
            {activeSection === "categories" && <CategoryManagement />}
            {activeSection === "products" && <ProductManagement />}
          </div>
        )}
      </main>
    </div>
  );
}
