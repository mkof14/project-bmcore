import { SignUp } from "@clerk/clerk-react";
import { ArrowLeft } from "lucide-react";

type Props = {
  onBack: () => void;
};

export default function CustomSignUp({ onBack }: Props) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 p-6 shadow-2xl border border-slate-800">
        <button
          onClick={onBack}
          className="absolute left-4 top-4 text-slate-300 hover:text-white transition"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="w-full flex justify-center mt-6 mb-4">
          <img src="/assets/logo-bmc.png" className="h-14 w-14" />
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
              card: "bg-slate-900 shadow-none border-none",
              headerTitle: "text-white text-xl font-semibold",
              headerSubtitle: "text-slate-400",
              socialButtonsBlockButton:
                "bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700",
              dividerLine: "bg-slate-700",
              dividerText: "text-slate-500",
              formFieldInput:
                "bg-slate-800 border border-slate-700 text-slate-200 focus:border-blue-500",
              formFieldLabel: "text-slate-300",
              footerActionText: "text-slate-400",
              footerActionLink: "text-blue-400 hover:text-blue-300",
              identityPreviewText: "text-slate-300",
            },
            layout: {
              socialButtonsPlacement: "top",
            },
          }}
        />
      </div>
    </div>
  );
}
