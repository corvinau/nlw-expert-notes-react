export function NoteCard() {
  return (
    <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-sm font-medium text-slate-300'>há 2 dias</span>
      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde
        ducimus soluta deleniti nisi minus sequi ad ut voluptatum minima nostrum
        assumenda eum facere enim, quo tempora incidunt non illum! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Esse eius quam aut
        aspernatur quia assumenda possimus labore recusandae vitae harum odit
        quis deleniti, reiciendis delectus maxime quo ea quod deserunt! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aliquid
        aspernatur? Officiis quibusdam eum hic laboriosam qui asperiores minima
        quod consequuntur, eveniet suscipit est amet enim culpa. Architecto,
        laudantium aperiam!
      </p>

      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  );
}
