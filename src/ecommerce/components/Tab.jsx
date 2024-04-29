export default function Tab({ onClick, id, currentTab, ariaControls, name }) {
  return (
    <button
      onClick={onClick}
      id={id}
      class={`${
        currentTab === name.toLowerCase()
          ? "border-b-2 border-indigo-600 text-indigo-600"
          : "border-transparent"
      }  text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium`}
      aria-controls={ariaControls}
      role="tab"
      type="button"
    >
      {name}
    </button>
  );
}
