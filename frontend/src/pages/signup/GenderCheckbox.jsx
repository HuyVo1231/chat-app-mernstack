const GenderCheckbox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className='cursor-pointer label gap-2'>
          <span className='label-text'>Male</span>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-primary'
            defaultChecked
          />
        </label>
      </div>
      <div className='form-control'>
        <label className='cursor-pointer label gap-2'>
          <span className='label-text'>Female</span>
          <input type='radio' name='radio-2' className='radio radio-primary' />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
