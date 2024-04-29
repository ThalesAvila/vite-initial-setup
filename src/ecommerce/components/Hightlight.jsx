export default function Highlight({ alt, src, name }) {
  return (
    <div class="group relative text-sm">
      <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <img src={src} alt={alt} class="object-cover object-center" />
      </div>
      <a href="#" class="mt-6 block font-medium text-gray-900">
        <span class="absolute inset-0 z-10" aria-hidden="true"></span>
        {name}
      </a>
      <p aria-hidden="true" class="mt-1">
        Shop now
      </p>
    </div>
  );
}
