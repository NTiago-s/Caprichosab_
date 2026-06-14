"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { productGroups } from "@/app/lib/site-data";
import { displayFontClass, eyebrowClass } from "@/app/lib/styles";

function ProductCard({ product, index, onSelect }) {
  return (
    <button
      className="group relative flex w-full transform-gpu cursor-pointer flex-col overflow-hidden rounded-2xl border border-[rgba(255,232,220,0.18)] bg-[linear-gradient(150deg,rgba(255,232,220,0.12),transparent_48%),rgba(255,232,220,0.055)] p-0 text-left font-inherit text-inherit shadow-[0_16px_45px_rgba(0,0,0,0.16)] transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1 hover:border-[rgba(255,232,220,0.38)] hover:shadow-[0_20px_54px_rgba(0,0,0,0.22)] active:translate-y-0 focus-visible:-translate-y-1 focus-visible:border-[rgba(255,232,220,0.42)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,232,220,0.72)]"
      type="button"
      onClick={onSelect}
      aria-haspopup="dialog"
      aria-label={`Ver mas sobre ${product.name}`}
    >
      <span className="relative block aspect-[1.45] overflow-hidden border-b border-[rgba(255,232,220,0.18)] bg-[#26050d] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(38,5,13,0.08),rgba(38,5,13,0.28)),radial-gradient(circle_at_bottom_right,rgba(255,232,220,0.14),transparent_6rem)] max-sm:aspect-[1.35]">
        <Image
          src={product.image}
          alt={product.name}
          width={420}
          height={520}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-full w-full scale-[1.02] object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055] group-hover:saturate-[1.06]"
        />
      </span>

      <span className="relative z-[1] flex min-h-[130px] flex-1 flex-col p-5">
        <span className="mb-2 mr-14 text-xl font-black text-[#fff8ed]">
          {product.name}
        </span>
        <span className="leading-[1.55] text-[#e2c3b6]">
          {product.description}
        </span>
        <span className="mt-auto w-fit self-center rounded-full border border-[rgba(255,232,220,0.24)] bg-[rgba(255,232,220,0.09)] px-3.5 py-2 text-sm font-black text-[#ffe8dc] transition duration-300 group-hover:border-[rgba(255,232,220,0.38)] group-hover:bg-[rgba(255,232,220,0.14)]">
          Ver mas
        </span>
      </span>
    </button>
  );
}

function ProductModal({ isOpen, product, titleId, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[rgba(12,1,4,0.68)] p-4 backdrop-blur-[22px] transition-[opacity,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-sm:p-2 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className={`relative grid h-[min(84dvh,680px)] w-[min(980px,100%)] transform-gpu grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] gap-[clamp(1rem,3vw,1.5rem)] overflow-hidden rounded-[24px] border border-[rgba(255,232,220,0.24)] bg-[linear-gradient(135deg,rgba(255,232,220,0.12),transparent_38%),rgba(38,5,13,0.9)] p-[clamp(1rem,3vw,1.25rem)] shadow-[0_34px_110px_rgba(0,0,0,0.58)] backdrop-blur-md transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform max-lg:h-[min(92dvh,760px)] max-lg:grid-cols-1 max-sm:h-[94dvh] max-sm:grid-rows-[auto_auto_1fr] max-sm:gap-3 max-sm:rounded-[22px] ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-[0.98] opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          className="z-[2] mb-3 ml-auto grid size-10 min-h-0 cursor-pointer place-items-center rounded-full border border-[rgba(255,232,220,0.24)] bg-[rgba(38,5,13,0.76)] p-0 text-xl font-black leading-none text-[#ffe8dc] backdrop-blur-xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,232,220,0.72)] sm:absolute sm:top-3.5 sm:right-3.5 sm:mb-0 sm:inline-flex sm:size-auto sm:min-h-10 sm:px-3.5 sm:py-2.5 sm:text-base sm:leading-normal"
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle del producto"
        >
          <span className="hidden sm:block">Cerrar</span>
          <span className="block sm:hidden" aria-hidden="true">X</span>
        </button>

        <div className="grid min-h-0 place-items-center overflow-hidden rounded-[18px] border border-[rgba(255,232,220,0.18)] bg-[#26050d] max-lg:h-[38dvh] max-sm:h-[32dvh]">
          <Image
            src={product.detailImage ?? product.image}
            alt={product.name}
            width={420}
            height={520}
            sizes="(max-width: 768px) 92vw, 42vw"
            className={`h-full w-full object-cover ${product.detailImageClass ?? ""}`}
            loading="eager"
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-center p-[clamp(0.5rem,2vw,1.2rem)] max-lg:justify-start max-sm:p-1">
          <p className={eyebrowClass}>Detalle del producto</p>
          <h3
            className={`${displayFontClass} mb-4 text-[clamp(2.4rem,6vw,4rem)] leading-[0.98] max-sm:mb-3 max-sm:text-[2.3rem]`}
            id={titleId}
          >
            {product.name}
          </h3>
          <p className="text-lg leading-[1.65] text-[#e2c3b6] max-sm:text-base max-sm:leading-[1.45]">
            {product.description}
          </p>

          <div className="mt-5 rounded-2xl border border-[rgba(255,232,220,0.18)] bg-[rgba(255,232,220,0.075)] p-4 max-sm:mt-3 max-sm:p-3">
            <h4 className="mb-3.5 text-xl font-black text-[#fff8ed] max-sm:mb-2 max-sm:text-lg">
              {product.detailTitle}
            </h4>
            {product.options.length > 0 ? (
              <ul className="grid list-none gap-2.5 p-0 max-sm:gap-1.5">
                {product.options.map((option) => (
                  <li
                    className="relative pl-5 text-lg font-black text-[#ffe8dc] before:absolute before:top-[0.68em] before:left-0 before:size-1.5 before:rounded-full before:bg-[#ffd9ba] max-sm:text-base"
                    key={option}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="m-0 text-[#e2c3b6]">Opciones listas para cargar.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTitleId = useId();
  const closeTimerRef = useRef(null);

  const handleSelectProduct = (product) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    setSelectedProduct(product);
    window.requestAnimationFrame(() => setIsModalOpen(true));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    closeTimerRef.current = window.setTimeout(() => {
      setSelectedProduct(null);
      closeTimerRef.current = null;
    }, 220);
  };

  useEffect(() => {
    if (!selectedProduct) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="grid gap-5">
        {productGroups.map((group) => (
          <section
            className="grid gap-4 rounded-[24px] border border-[rgba(255,232,220,0.18)] bg-[linear-gradient(135deg,rgba(255,232,220,0.09),transparent_36%),rgba(38,5,13,0.8)] p-[clamp(1rem,3vw,1.35rem)] shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-[10px]"
            key={group.title}
            aria-labelledby={`grupo-${group.id}`}
          >
            <div className="flex items-end justify-between gap-4 max-sm:grid max-sm:justify-items-start">
              <p className="m-0 w-fit rounded-full bg-[rgba(255,232,220,0.12)] px-2.5 py-1.5 text-[0.72rem] font-black uppercase tracking-[0.08em] text-[#ffd9ba]">
                {group.label}
              </p>
              <h3
                className={`${displayFontClass} m-0 text-3xl leading-[0.98]`}
                id={`grupo-${group.id}`}
              >
                {group.title}
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {group.products.map((product, index) => (
                <ProductCard
                  index={index}
                  key={product.name}
                  product={product}
                  onSelect={() => handleSelectProduct(product)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {selectedProduct ? (
        <ProductModal
          isOpen={isModalOpen}
          product={selectedProduct}
          titleId={modalTitleId}
          onClose={handleCloseModal}
        />
      ) : null}
    </>
  );
}
