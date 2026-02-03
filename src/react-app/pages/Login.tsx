import { useAuth } from "@getmocha/users-service/react";
import { Package } from "lucide-react";

export default function LoginPage() {
  const { redirectToLogin, isPending } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
              <Package className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
              Cont+
            </h1>
            <p className="text-gray-600 text-sm">
              Sistema de Controle de Estoque
            </p>
          </div>

          {/* Login Button */}
          <button
            onClick={redirectToLogin}
            disabled={isPending}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Carregando..." : "Entrar com Email Empresarial"}
          </button>

          {/* Info Text */}
          <p className="text-center text-gray-500 text-xs mt-6">
            Use seu email empresarial para acessar
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          © 2024 Cont+ - Controle de Estoque e Produção
        </p>
      </div>
    </div>
  );
}
