const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className='cursor-pointer label gap-2'>
          <span className='label-text'>Male</span>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-primary'
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className='cursor-pointer label gap-2'>
          <span className='label-text'>Female</span>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-primary'
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
