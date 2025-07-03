export function Select() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-[#4D5C57] text-xs">
        Categoria
      </label>
      <select
        name="category"
        id="category"
        className="rounded-lg border border-[#CDD5D2] text-[#4D5C57] text-sm px-4 py-3.5 outline-none cursor-pointer w-[16.375rem]"
      >
        <option value="default" disabled selected>
          Selecione
        </option>
        <option value="food">Alimentação</option>
        <option value="accommodation">Hospedagem</option>
        <option value="transport">Transporte</option>
        <option value="services">Serviços</option>
        <option value="others">Outros</option>
      </select>
    </div>
  )
}
