import { svg } from "../../data/svgList";

export const Loading = () => {  
  return (
    <button type='button' className='flex items-center flex-col bg-indigo-500 text-kashmirBlue dark:text-white text-4xl gap-4' disabled>
      {svg.icon.loading}
      Loading...
    </button>
  );
}
