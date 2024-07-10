import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateStepsProps {
    IsGuestsInputOpen: boolean;
    openGuestsInput: () => void;
    closeGuestsInput: () => void;
}

export function DestinationAndDateSteps({IsGuestsInputOpen, closeGuestsInput, openGuestsInput}: DestinationAndDateStepsProps) {
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
    )
}