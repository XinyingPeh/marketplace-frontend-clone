import { Link } from "react-router-dom";
export default function PaymentSuccess() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Thank you for your purchase!</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Please check your email</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/items"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Back to Shop
              </Link>
              <a href="/contactus" className="text-sm font-semibold text-gray-900">
              Contact Support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  