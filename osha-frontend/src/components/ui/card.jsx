
function GlowingGradientBorder() {
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden ">
      <div class="max-w-7xl mx-auto">
        <div class="relative group cursor-pointer">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
          </div>
          <div
            class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div class="space-y-2">
              <p class="text-slate-800">Glowing Gradient Border</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GradientBorder() {
  return (
    <div class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
      <div class="bg-white p-7 rounded-md">
        <h1 class="font-bold text-xl mb-2">Border gradient example</h1>
        <p>Create beautfiul cards with gradient borders with Tailwind CSS.</p>
      </div>  
    </div>
  )
}

function Form1() {
  return (
    <div class="py-10 px-5 bg-gray-800 flex flex-col justify-center">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            class="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div class="text-white relative px-4 py-10 bg-indigo-400 shadow-lg rounded-3xl sm:p-10">
          <div class="text-center">
            <h1 class="text-3xl">Contact Us!</h1>
            <p class="text-gray-300">
              Fill up the form below to send us a message.
            </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

function CardTwoCards() {
  return (
    <div class="py-10 px-5 bg-gray-800 flex flex-col justify-center">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            class="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div class="text-white relative px-4 py-10 bg-indigo-400 shadow-lg rounded-3xl sm:p-10">
          <div class="text-center">
            <h1 class="text-3xl">Contact Us!</h1>
            <p class="text-gray-300">
              Fill up the form below to send us a message.
            </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

function categories() {
  return(
    <>
    {/*COURSE CATEGORIES DES START*/}
    <div>
      <div class="kf_cur_catg_des color-3">
        <span><i class="icon-chemistry29"></i></span>
        <div class="kf_cur_catg_capstion">
          <h5 data-translatable>Ciencia y Tecnología // Sciencie & Tecnology</h5>
          <p data-translatable>Aplicamos parámetros y métodos de óptimo aprendizaje y
              desarrollo teórico práctico. // We apply parameters and methods of optimal
              learning and practical theoretical development.
          </p>
        </div>
      </div>
    </div>
    {/*COURSE CATEGORIES DES END*/}
    </>
  )
}

function HoverEffectCard({ backgroundColor, hoverColor, icon, text, link }){
  return(
    <div className={`group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300
                    hover:-translate-y-1 hover:shadow-2xl
                    sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
      <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-${backgroundColor} transition-all duration-300 group-hover:scale-[10]`}></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className={`grid h-20 w-20 place-items-center rounded-full bg-${hoverColor} transition-all duration-300 group-hover:bg-${hoverColor}`}>
          {icon}
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>{text}</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a href={link} className={`text-${backgroundColor} transition-all duration-300 group-hover:text-white`}>Read the docs &rarr;</a>
          </p>
        </div>      
      </div>
    </div>
  )
}

function Section({}){
  return(
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">      
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
      </div>
      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">        
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          {/* Button Container */}
          <div className="mt-8">
            <a href="#" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read More</a>
          </div>
        </div>
      </div>      
    </div>
  )
}

function Section1({ imagePath, title, content, colorButton, hoverColorButton }) {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className="h-full w-full object-cover md:rounded-lg" src={imagePath} alt={title} />
      </div>
      {/* Text Column */}
      <div className="max-w-lg bg-white md:rounded-lg md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-10 md:px-15">
          <h2 className="text-xl font-medium uppercase text-green-800 lg:text-2xl">{title}</h2>
          <p className="mt-4">{content}</p>
          {/* Button Container */}
          <div className="mt-5">
            <a href="#" className={`inline-block w-full text-center text-lg font-medium text-gray-100
                                    bg-${colorButton} rounded-lg border-solid border-2 py-2 px-10
                                    hover:bg-${hoverColorButton} hover:shadow-md md:w-48`}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({icon, title, content, bgClass, textClass, bgCiClass }) => {
  return (
    <div className="flex flex-col">
      <div className={`mx-auto flex h-24 w-24 transform items-center justify-center rounded-full ${bgCiClass} shadow-lg shadow-gray-500/40 -mb-10`}>
          {icon}
        </div>
      <div className={`rounded-xl ${bgClass} pt-14 px-6 pb-6 text-center shadow-xl`}>
        <h1 className={`text-darken mb-3 ${textClass} text-lg font-medium lg:px-14`}><b>{title}</b></h1>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
};

function Cardc({ colorBg, colorCi, icon, title, content }) {
  return (
    <div className={`rounded-xl bg-${colorBg} p-6 text-center shadow-xl`}>
      <div className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-${colorCi} shadow-lg shadow-${colorCi}-500/40`}>
        {icon}
      </div>
      <h1 className="text-darken mb-3 text-lg font-medium lg:px-14">{title}</h1>
      <p className="px-4 text-gray-500">{content}</p>
    </div>
  );
}


function Card2() {
  return (
    <div className="relative card">
      <p className="heading">Popular this month</p>
      <p>Powered By</p>
      <p className="font-semibold text-purple-600">Uiverse</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="relative max-w-xs max-h-80 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg p-8 m-4 text-center shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
      <p className="text-xl font-bold text-gray-800 mb-4">Product Name</p>
      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-900 rounded-bl-lg">
        <div className="text-white">→</div>
      </div>
    </div>
  );
}

export { HoverEffectCard, Section1, Card, Card2, Card3, Form1 };