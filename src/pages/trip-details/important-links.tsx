import { Link2, Plus } from "lucide-react";
import { Button } from "@/components/button";
import { useEffect, useState } from "react";
import { CreateLinkModal } from "./create-link-modal";
import { useParams } from "react-router-dom";
import { api } from "@/lib/axios";

interface Link {
  id: string
  title: string,
  url: string
}

export function ImportantLinks() {

  const [isCreateLinkModalOpen, setCreateLinkModalOpen ] = useState(false)
  const [links, setLinks] = useState<Link[]>()

  function openLinkModal() {
    setCreateLinkModalOpen(true)
  }

  function closeLinkModal() {
    setCreateLinkModalOpen(false)
  }

  const { tripId } = useParams()

  useEffect(() => {
    api.get(`/trips/${tripId}/links`)
    .then((response) => setLinks(response.data.links))

  }, [tripId])
  
  return (
    <div className="space-y-6">
      <h1 className="font-semibold text-xl tracking-tight">
        Links importantes
      </h1>
     {links?.map((link) => {
      return (
        <div key={link.id} className="space-y-5 ">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              {link.title}
            </span>
            <a
              href={link.url}
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              {link.url}
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      )
     })}
      <Button onClick={openLinkModal} variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
      {isCreateLinkModalOpen && (
        <CreateLinkModal closeLinkModal={closeLinkModal} />
      )}

    </div>
  );
}
