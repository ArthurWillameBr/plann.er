import {
  ArrowRight,
  UserRoundPlus,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateSteps } from "./steps/destination-and-date-steps";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [IsGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfimTipModalOpen, setIsConfimTipModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(["arthur@gmail.com"]);

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

  function openConfirmTipModal() {
    setIsConfimTipModalOpen(true);
  }

  function closeConfirmTipModal() {
    setIsConfimTipModalOpen(false);
  }

  function addNewEmailToInvite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(email: string) {
    setEmailsToInvite(
      emailsToInvite.filter((emailToFilter) => emailToFilter !== email)
    );
  }

  function createTrip(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/1");
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
          <DestinationAndDateSteps
            IsGuestsInputOpen={IsGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />
          {IsGuestsInputOpen && (
           
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
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailToInvite={removeEmailToInvite}
        />
      )}

      {isConfimTipModalOpen && (
        <ConfirmTripModal
          closeConfirmTipModal={closeConfirmTipModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
