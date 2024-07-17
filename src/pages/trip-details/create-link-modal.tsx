import { X, Tag, LucideLink } from "lucide-react";
import { Button } from "@/components/button"
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "@/lib/axios";
import { Input } from "@/components/input";

interface CreateLinkModal {
    closeLinkModal: () => void
}

export function CreateLinkModal({closeLinkModal}: CreateLinkModal ) {

    const { tripId } = useParams()

    async function createLink(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = new FormData(event.currentTarget)

        const title = data.get("title")?.toString()

        const url = data.get("url")?.toString()

        await api.post(`/trips/${tripId}/links`, {
            title,
            url
        })
        window.location.reload()
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cadastrar link</h2>
              <button>
                <X onClick={closeLinkModal} className="size-5 text-zinc-500 hover:text-zinc-300" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Todos os convidados podem visualizar os links
            </p>
          </div>
          <form onSubmit={createLink} className="space-y-3">
            <div className="flex items-center gap-2 h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
              <Tag className="size-5 text-zinc-400" />
              <Input
                type="text"
                name="title"
                placeholder="Titulo do link"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 h-14 flex-1 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
                <LucideLink className="size-5 text-zinc-400" />
                <Input
                  type="url"
                  name="url"
                  placeholder="Url"
                  className="[color-scheme:dark] "
                />
              </div>
            </div>
            <Button size="full">Salvar link</Button>
          </form>
        </div>
      </div>
    )
}