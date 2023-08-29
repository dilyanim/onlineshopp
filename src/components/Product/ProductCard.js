import React from 'react';


const ProductCard = ({element}) => {
    return (
      <div  className='contain mx-4 my-5 basis-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-00 dark:border-gray-700'>
               
    <a href="#">
        <img class="rounded-t-lg  w-15 " src={element.image} alt="" />
    </a>
    <div class="p-5  ">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{element.title}</h5>
            <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black'> {element.price}</h4>
            <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black'> {element.rating}</h4>

        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-700">{element.description}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
            Busket
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

          

    );
};

export default ProductCard;