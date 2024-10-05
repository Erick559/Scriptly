'use client'

import React, { useEffect, useState } from 'react'

import { Card, CardContent } from '../ui/card'
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCheck, Trash, TriangleAlert } from 'lucide-react';

interface Suggestion {
    name: string;
    color:string;
    from: string;
    to: string;
    key: number;
}

interface AnimatedBudget extends Suggestion {
    id: number;
}

const SuggestionsFeature = () => {
    const suggestions: Suggestion[] = [
        {
          name: 'Simplify Text',
          color:'text-green-500',
          from: 'endeavor',
          to:'try',
          key: 1,
        },
        {
          name: 'Spelling Mistake',
          color:'text-red-600',
          from: 'Tommorrow',
          to:'Tomorrow',
          key: 2,
        },
        {
          name: 'Punctuation Mistake',
          color:'text-blue-600',
          from:"Youre",
          to:"You're",
          key: 3,
        },
      ]

      const [stack, setStack] = useState<AnimatedBudget[]>(() => [
        { ...suggestions[0], id: 0 }
      ]);
      const [counter, setCounter] = useState<number>(1);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCounter(prevCounter => prevCounter + 1);
          setStack(prevStack => {
            const newItem: AnimatedBudget = {
              ...suggestions[counter % suggestions.length],
              id: counter
            };
            return [newItem, ...prevStack].slice(0, 3); // Keep only top 3 items
          });
        }, 3000); // Add new item every 2 seconds
    
        return () => clearInterval(interval);
      }, [counter]);

  return (
    <div className='flex flex-col gap-5 md:gap-16 md:flex-row px-5 sm:px-10 lg:px-24 xl:px-72'>
        <div className='flex flex-col gap-2 items-center md:items-start flex-1 justify-center order-1 md:order-2'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 text-center md:text-left'>Recieve Grammar Suggestions</h2>
            <p className='text-lg text-center md:text-left w-[30ch]'>Our AI model will provide you with grammar suggestions for your document.</p>
        </div>

        <div className='flex-1 order-2 md:order-1'>
            <Card className='bg-blue-300 lg:py-10'>
                <CardContent className='flex items-center justify-center pt-3'>
                <div className='flex flex-col transform w-full items-center [mask-image:linear-gradient(to_top,transparent_5%,#000_60%)] p-3 h-[200px]'>
                    <AnimatePresence initial={false}>
                    {stack.map((suggestion, index) => (
                        <motion.div
                        key={suggestion.id}
                        initial={{ y:-60, opacity:0}}
                        animate={{y:index * 50,opacity:1}}
                        exit={{y:60,opacity:0}}
                        transition={{ duration: 0.2, ease:"easeInOut" }}
                        style={{ top: `${index * 80}px` }}
                        className='absolute bg-white border-[1px] p-4 w-full rounded-2xl shadow-2xl flex items-center justify-between'
                        >
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <span className={`w-10 h-10 flex items-center justify-center rounded-full ${suggestion.color}`}><TriangleAlert /></span>
                                <p className='md:text-sm lg:text-lg'>{suggestion.name}</p>  
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <p className='text-sm'>{suggestion.from} &#8594; {suggestion.to}</p>
                            </div>
                        </div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default SuggestionsFeature