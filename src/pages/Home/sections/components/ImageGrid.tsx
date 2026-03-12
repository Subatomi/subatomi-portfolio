import { useState } from "react"
import Lightbox from "./Lightbox"

type Project = {
  id: number
  title: string
  image: string[]
}

type Props = {
  project: Project
  isHome?: boolean
}

export default function ImageGrid({ project, isHome = false }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const openLightbox = (index: number) => {
    setStartIndex(index)
    setLightboxOpen(true)
  }

  const images = project.image
  const count = images.length

  // For home, only show the first image
  if (isHome && images.length > 0) {
    const imagesToShow = images.slice(0, 1)
    return (
      <div className="w-full h-full">
        <div className="w-full h-full">
          {imagesToShow.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={project.title}
              className="cursor-pointer w-full h-full object-cover rounded-lg"
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>

        {lightboxOpen && (
          <Lightbox
            images={images}
            startIndex={startIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </div>
    )
  }

  // Non-home: show grid of up to 4 images
  const visible = images.slice(0, 4)

  return (
    <>
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        {visible.map((src, i) => {
          const showOverlay = count > 4 && i === 3
          const overlayText = showOverlay ? `+${count - 4}` : null

          let classes = "relative cursor-pointer group overflow-hidden h-full"

          // If only one image → span 2 columns
          if (count === 1) {
            classes += " col-span-2"
          }

          return (
            <button
              key={i}
              className={classes}
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg border border-neutral-200 shadow-sm group-hover:opacity-90 transition-opacity"
              />

              {overlayText && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 rounded-lg">
                  <span className="text-white text-3xl font-bold">
                    {overlayText}
                  </span>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          startIndex={startIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
