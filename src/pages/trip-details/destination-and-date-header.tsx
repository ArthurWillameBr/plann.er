import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "@/components/button";
import { useParams } from "react-router-dom"; 
import { api } from "@/lib/axios";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { UpdateTripModal } from "./update-trip-modal";

export interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean

}

export function DestinationAndDateHeader() {
  const [trip, setTrip] = useState<Trip | undefined>()
  const [isUpdateTripModalOpen, setIsUpdateTripModalOpen] = useState(false)

  function openUpdateTripModal() {
    setIsUpdateTripModalOpen(true)
  }
  
  function closeUpdateTripModal() {
    setIsUpdateTripModalOpen(false)
  }

  const { tripId } = useParams()
  
  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId]);

  const displayedDate = trip ? format(trip.starts_at, "d 'de' LLL").concat(" até ").concat(format(trip.ends_at, "d 'de' LLL")) : null

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2 ">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2 ">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-100">{displayedDate}</span>
        </div>
        <div className="w-px h-6 bg-zinc-800" />
        <Button onClick={openUpdateTripModal} variant="secondary">
          <Settings2 className="size-5 text-zinc-400" />
          Atualizar
        </Button>
      </div>
      {isUpdateTripModalOpen && (
        <UpdateTripModal closeUpdateTripModal={closeUpdateTripModal}/>
      )}
    </div>
  );
}
