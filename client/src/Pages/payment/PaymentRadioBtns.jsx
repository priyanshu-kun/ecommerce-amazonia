import { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import Stripe from "../../Assets/stripe.svg"
import PayPal from "../../Assets/paypal-seeklogo.com.svg"
import "./payment.css"

const plans = [
  {
    name: "PayPal",
    logo: PayPal
  },
  {
    name: "Stripe",
    logo: Stripe
  }
]


export default function PaymentRadio({ setPaymentMethod }) {
  const [selected, setSelected] = useState(plans[0])
  //   console.log(plans[0],paymentMethod)


  useEffect(() => {
    setPaymentMethod({name: selected.name})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <div className="w-full py-3">
      <div className="w-full max-w-4xl  mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan,index) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${active
                    ? 'ring-2 ring-offset-2 ring-offset-green-100 ring-white ring-opacity-60'
                    : ''
                  }
                  ${checked
                    ? 'bg-green-100 bg-opacity-75 text-white'
                    : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-2xl">
                          <RadioGroup.Label
                            as="p"
                            className={`font-black ml-6 payment-heading py-2 h-12 mb-2 flex justify-between  ${checked ? 'text-black' : 'text-gray-900'
                              }`}
                          >
                             <img  src={plan.logo} alt="boom" />
                          </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${checked ? 'text-green-200' : 'text-gray-500'
                                }`}
                            >
                            </RadioGroup.Description>
                        </div>
                        </div>
                        {checked && (
                          <div className="flex-shrink-0 text-white">
                            <CheckIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                  </>
                )}
                  </RadioGroup.Option>
                ))}
          </div>
        </RadioGroup>
      </div>
      </div>
  )
}

function CheckIcon(props) {
  return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#10B981" opacity="0.6" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  )
}
