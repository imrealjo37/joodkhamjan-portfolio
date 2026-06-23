
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface StackedCardItem {
  id: string;
  title: string;
  description: string;
  iconColor: string;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
}

interface StackedAccordionProps {
  items: StackedCardItem[];
  defaultExpanded?: string;
}

function DiamondIcon({ color }: { color: string }) {
  return (
    <div
      className="w-5 h-5 rotate-45 rounded-[3px] shrink-0"
      style={{ backgroundColor: color }}
    />
  );
}

export default function StackedAccordion({
  items,
  defaultExpanded,
}: StackedAccordionProps) {
  const initialId =
    defaultExpanded && items.some((item) => item.id === defaultExpanded)
      ? defaultExpanded
      : items[0]?.id;

  const [expandedId, setExpandedId] = useState<string | undefined>(initialId);

  /*
   * Makes the selected card the front card.
   * The cards after it wrap around and move behind it.
   */
  const orderedItems = useMemo(() => {
    const activeIndex = items.findIndex((item) => item.id === expandedId);

    if (activeIndex < 0) {
      return items;
    }

    return [
      ...items.slice(activeIndex),
      ...items.slice(0, activeIndex),
    ];
  }, [items, expandedId]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="relative w-full pt-12">
      {/* Click Me */}
      <div className="pointer-events-none absolute right-4 top-0 z-50 flex items-end md:right-10">
        <span
          className="mr-1 -rotate-6 text-sm italic text-primary/70"
          style={{ fontFamily: 'cursive' }}
        >
          Click Me!
        </span>

        <svg
          width="58"
          height="38"
          viewBox="0 0 58 38"
          fill="none"
          className="text-primary/60"
        >
          <path
            d="M55 4C40 3 24 7 15 17C10 23 9 29 10 34"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M5 29L10 35L15 29"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Layered cards */}
      <motion.div
        layout
        className="relative flex w-full flex-col"
        transition={{
          layout: {
            type: 'spring',
            stiffness: 230,
            damping: 28,
          },
        }}
      >
        {orderedItems.map((item, stackIndex) => {
          const isExpanded = item.id === expandedId;

          return (
            <motion.article
              layout
              layoutId={`stacked-card-${item.id}`}
              key={item.id}
              onClick={() => setExpandedId(item.id)}
              className="relative cursor-pointer"
              style={{
                zIndex: orderedItems.length - stackIndex,
                marginTop: stackIndex === 0 ? 0 : -14,
                transformOrigin: 'top center',
              }}
              initial={false}
              animate={{
                y: stackIndex * 2,
                scale: 1 - stackIndex * 0.006,
              }}
              transition={{
                layout: {
                  type: 'spring',
                  stiffness: 220,
                  damping: 26,
                },
                y: {
                  type: 'spring',
                  stiffness: 240,
                  damping: 28,
                },
                scale: {
                  duration: 0.35,
                },
              }}
              whileHover={{
                y: stackIndex === 0 ? -3 : stackIndex * 2 - 2,
              }}
            >
              <motion.div
                layout
                className={`overflow-hidden rounded-[22px] border backdrop-blur-sm ${
                  isExpanded
                    ? 'border-primary/25 bg-card shadow-2xl shadow-black/10'
                    : 'border-border/40 bg-card/95 shadow-lg shadow-black/5'
                }`}
                transition={{
                  layout: {
                    type: 'spring',
                    stiffness: 220,
                    damping: 28,
                  },
                }}
              >
                {/* Header */}
                <motion.button
                  layout="position"
                  type="button"
                  aria-expanded={isExpanded}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  onClick={(event) => {
                    event.stopPropagation();
                    setExpandedId(item.id);
                  }}
                >
                  <DiamondIcon color={item.iconColor} />

                  <span className="text-base font-semibold text-foreground sm:text-lg">
                    {item.title}
                  </span>

                  <motion.span
                    className="ml-auto flex h-7 w-7 items-center justify-center text-muted-foreground"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M3.5 6L8.5 11L13.5 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </motion.button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          type: 'spring',
                          stiffness: 210,
                          damping: 28,
                        },
                        opacity: {
                          duration: 0.3,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="grid gap-6 px-5 pb-6 pt-1 sm:px-7 sm:pb-7 md:grid-cols-[0.75fr_1.6fr]"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {/* Description */}
                        <div className="flex items-start">
                          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                            {item.description}
                          </p>
                        </div>

                        {/* Image or video */}
                        {item.media && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 18,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            transition={{
                              delay: 0.12,
                              duration: 0.45,
                            }}
                            className="overflow-hidden rounded-xl border border-border/30 bg-muted/20"
                          >
                            {item.media.type === 'video' ? (
                              <video
                                src={item.media.src}
                                className="aspect-video w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false}
                              />
                            ) : (
                              <img
                                src={item.media.src}
                                alt={item.media.alt || item.title}
                                className="aspect-video w-full object-cover"
                                loading="lazy"
                              />
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}

