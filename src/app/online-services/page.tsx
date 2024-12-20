import React from "react";

const OnlinePage = () => {
  const onlineServices = {};
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <h1 className=" m-5 text-5xl font-bold">Online Services</h1>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full">
              <div className="m-5  flex w-[300px] items-center justify-center rounded-lg bg-primary p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  className="fill-current"
                >
                  <path
                    opacity="0.5"
                    d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
                  />
                  <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlinePage;
