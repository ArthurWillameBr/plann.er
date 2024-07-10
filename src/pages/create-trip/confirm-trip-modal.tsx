import { X, User, Mail } from "lucide-react";

interface ConfirmTripModalProps {
    closeConfirmTipModal: () => void;
    addNewEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void;
    createTrip: () => void;
}

export function ConfirmTripModal({addNewEmailToInvite, closeConfirmTipModal, createTrip}: ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar criação de viagem
                </h2>
                <button onClick={closeConfirmTipModal}>
                  <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para{" "}
                <span className="font-semibold text-zinc-100">
                  General Sampaio, Brasil
                </span>{" "}
                nas datas de{" "}
                <span className="font-semibold text-zinc-100">
                  16 a 27 de Agosto de 2024
                </span>{" "}
                preecha seus dados abaixo:
              </p>
            </div>
            <form onSubmit={addNewEmailToInvite} className="space-y-3">
              <div className="flex items-center gap-2 h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
                <User className="size-5 text-zinc-400" />
                <input
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder:zinc-400 w-full outline-none "
                />
              </div>
              <div className="flex items-center gap-2 h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Mail className="size-5 text-zinc-400" />
                <input
                  name="name"
                  placeholder="Seu e-mail pessoal"
                  className="bg-transparent text-lg placeholder:zinc-400 w-full outline-none "
                />
              </div>
              <button
                onClick={createTrip}
                type="submit"
                className="bg-lime-300 text-lime-950 hover:bg-lime-400 px-5 h-12 gap-2 w-full rounded-lg font-medium flex items-center justify-center"
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
    )
}