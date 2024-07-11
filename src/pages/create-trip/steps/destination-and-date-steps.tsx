import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepsProps {
  IsGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
}

export function DestinationAndDateSteps({
  IsGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepsProps) {
  return (
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
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button variant="primary" onClick={openGuestsInput}>
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
