import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepsProps {
  openGuestsModal: () => void;
  openConfirmTipModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsSteps({
  emailsToInvite,
  openConfirmTipModal,
  openGuestsModal,
}: InviteGuestsStepsProps) {
  return (
    <div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape">
      <button
        onClick={openGuestsModal}
        className="flex-1 flex items-center gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100s text-lg flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 mx-3 bg-zinc-800" />

      <Button variant="primary" onClick={openConfirmTipModal}>
        Confirmar viagem <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
