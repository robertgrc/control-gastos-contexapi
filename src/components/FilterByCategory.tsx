import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";


export default function FilterByCategory() {

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type:"add-filter-category", payload:{id: e.target.value}})
}

   const{dispatch} =useBudget()
  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
        <form action="">
            <div>
                <label htmlFor="category" className="flex flex-col md:flex-row md:items-center gap-5">Filtrar Gastos</label>
                <select 
                    id="category"
                    className="bg-slate-100 p-3 flex-1 rounded"
                    onChange={handleChange}
                >
                    <option value="">Todas las Categorias</option>
                    {categories.map(category=>(
                        <option
                            value={category.id}
                            key={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    </div>
  )
}
