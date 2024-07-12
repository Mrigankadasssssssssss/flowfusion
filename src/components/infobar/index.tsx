'use client'
import React, { useEffect } from 'react'
import { ModeToggle } from '../global/mode-toggle'
import { Book, Headphones, Search } from 'lucide-react'
import Templates from '../icons/Templates'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
// import { UserButton } from '@clerk/nextjs'
// import { useBilling } from '@/providers/billing-provider'
// import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/payment-connecetions'

type Props = {}

const InfoBar = (props: Props) => {
//   const { credits, tier, setCredits, setTier } = useBilling()

//   const onGetPayment = async () => {
//     const response = await onPaymentDetails()
//     if (response) {
//       setTier(response.tier!)
//       setCredits(response.credits!)
//     }
//   }

//   useEffect(() => {
//     onGetPayment()
//   }, [])

  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
    
    </div>
  )
}

export default InfoBar