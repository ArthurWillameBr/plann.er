import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [IsGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    "arthurwillame@gmail.com",
    "willame2023@gmail.com",
  ]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function addNewEmailToInvite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if(emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter((emailToFilter) => emailToFilter !== email));
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape">
            <div className="flex-1 flex items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={IsGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder:zinc-400 outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={IsGuestsInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder:zinc-400 w-32 outline-none"
              />
            </div>

            <div className="w-px h-6 mx-3 bg-zinc-800" />

            {IsGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700 px-5 py-2 gap-2 rounded-lg font-medium flex items-center"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 hover:bg-lime-400 px-5 py-2 gap-2 rounded-lg font-medium flex items-center"
              >
                Continuar <ArrowRight className="size-5" />
              </button>
            )}
          </div>
          {IsGuestsInputOpen && (
            <div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape">
              <button
                onClick={openGuestsModal}
                className="flex-1 flex items-center gap-2 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className=" text-zinc-400 text-lg flex-1">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="w-px h-6 mx-3 bg-zinc-800" />

              <button className="bg-lime-300 text-lime-950 hover:bg-lime-400 px-5 py-2 gap-2 rounded-lg font-medium flex items-center">
                Confirmar viagem <ArrowRight className="size-5" />{" "}
              </button>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            politicas de privacidade
          </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => (
                <div
                  key={email}
                  className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                >
                  <span className="text-zinc-300">{email}</span>
                  <button onClick={() => removeEmailToInvite(email)} type="button">
                    <X className="size-4 text-zinc-500 hover:text-zinc-300" />
                  </button>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form onSubmit={addNewEmailToInvite} className="flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
              <div className="flex items-center px-2 flex-1 gap-2">
                <AtSign className="size-5 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent text-lg placeholder:zinc-400 w-full outline-none "
                />
              </div>
              <button type="submit" className="bg-lime-300 text-lime-950 hover:bg-lime-400 px-5 py-2 gap-2 rounded-lg font-medium flex items-center">
                Convidar <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
