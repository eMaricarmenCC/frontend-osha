import { FaHome } from "react-icons/fa";

function Breadcrumb({ items, backgroundColor, color }) {
  return(
    <nav style={{ backgroundColor: backgroundColor }}>
      <ul className="flex p-4">
        <li className=''>
          <a href="#" class="text-gray-600 hover:text-blue-500">
            <FaHome/>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="mr-2">
            <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
            {index !== items.length - 1 ? (
              <a href={item.url} className="text-gray-600" style={{ color: color }}>
                {item.text}
              </a>
            ) : (
              <span className="text-gray-800" style={{ color: color }}>
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function BreadcrumbModelo() {
  return(
    <>
    <div class="bg-gray-100 rounded-lg p-3 flex items-center flex-wrap">
      <ul class="flex items-center">
      <li class="inline-flex items-center">
        <a href="#" class="text-gray-600 hover:text-blue-500">
        <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>
        </a>

        <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
      </li>

      <li class="inline-flex items-center">
        <a href="#" class="text-gray-600 hover:text-blue-500">
        Page 1
        </a>

        <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
      </li>

      <li class="inline-flex items-center">
        <a href="#" class="text-gray-600 hover:text-blue-500">
        Page 2
        </a>

        <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
      </li>

      <li class="inline-flex items-center">
        <a href="#" class="text-gray-600 hover:text-blue-500 text-blue-500">
        Page 3
        </a>
      </li>
      </ul>
    </div>
    </>
  )
}

export {Breadcrumb}