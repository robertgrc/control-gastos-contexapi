import { useState } from "react";
import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DraftExpense, Value } from "../types";



export default function ExpenseForm() {

const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>)=>{
    const {name, value}=e.target
    const isAmountField = ['amount'].includes(name)
    setExpense({
        ...expense,
        [name]: isAmountField? +value : value
    })
}

const handleChangeDate = (value:Value) => {
    setExpense({
        ...expense,
        date: value
    })
}

  return (
   <form className="space-y-5">
        <legend
            className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"
        >
            Nuevo Gasto
        </legend>
        <div className="flex flex-col gap-2">
            <label
                htmlFor="expenseName"
                className="text-xl" 
            >
                Nombre del Gasto:
            </label>
            <input 
                type="text"
                id="expenseName"
                placeholder="Añade el nombre del Gasto"
                className="bg-slate-100 p-2"
                name="expenseName" 
                // value={expense.expenseName}
                onChange={handleChange}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label
                htmlFor="amount"
                className="text-xl" 
            >
                Cantidad
            </label>
            <input 
                type="number"
                id="amount"
                placeholder="Añade la cantidad del gasto: ej. 300"
                className="bg-slate-100 p-2"
                name="amount" 
                // value={expense.amount}
                onChange={handleChange}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label
                htmlFor="category"
                className="text-xl" 
            >
                Categoria:
            </label>
            <select 
                id="category"
                aria-placeholder="Añade la cantidad del gasto: ej.300"
                className="bg-slate-100 p-2"
                name="category"
                // value={expense.category}
                onChange={handleChange}
            >
                <option value=""> -- Seleccione -- </option>
                  {categories.map(category=>(
                      <option
                        key={category.id} 
                        value={category.id}
                      >
                          {category.name}
                      </option>
                  ))}
            </select>
            
        <div className="flex flex-col gap-2">
            <label
                htmlFor="fecha"
                className="text-xl" 
            >
                Fecha Gasto:
            </label>
            <DatePicker 
                className="bg-slate-100 p-2 border-0"
                value={expense.date}
                onChange={handleChangeDate}
            />
        </div>

        </div>

        <input 
            type="submit"
            className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" 
            value={'Registrar Gasto'}
        />
   </form>
  )
}
