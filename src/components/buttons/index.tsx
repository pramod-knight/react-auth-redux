import React from 'react'
interface ButtonProps {
    type:"submit" | "reset" | "button" | undefined;
    isFetching:boolean;
    label:string;
    onClick?:()=>{}

}
export default function ButtonComp({type,isFetching,label,onClick}:ButtonProps) {
  return (
    <button
        type={type}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        disabled={isFetching}
        data-testid="button"
        onClick={onClick}
        >
        {
            isFetching ?<>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" />Loading ...
            </>
            :label
        }
        
    </button>
  )
}
