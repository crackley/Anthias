import { EditFormData } from '@/types'

const DAY_LABELS = [
  { value: 0, label: 'Mon' },
  { value: 1, label: 'Tue' },
  { value: 2, label: 'Wed' },
  { value: 3, label: 'Thu' },
  { value: 4, label: 'Fri' },
  { value: 5, label: 'Sat' },
  { value: 6, label: 'Sun' },
]

interface DaysOfWeekFieldProps {
  formData: EditFormData
  setFormData: React.Dispatch<React.SetStateAction<EditFormData>>
}

export const DaysOfWeekField = ({
  formData,
  setFormData,
}: DaysOfWeekFieldProps) => {
  const selectedDays = formData.days_of_week
    ? formData.days_of_week.split(',').filter(Boolean).map(Number)
    : []

  const toggleDay = (day: number) => {
    const newDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day].sort()

    setFormData({
      ...formData,
      days_of_week: newDays.join(','),
    })
  }

  const allSelected = selectedDays.length === 7
  const toggleAll = () => {
    setFormData({
      ...formData,
      days_of_week: allSelected ? '' : '0,1,2,3,4,5,6',
    })
  }

  return (
    <div className="row mb-3">
      <label className="col-4 col-form-label">Days of Week</label>
      <div className="col-8 d-flex flex-wrap align-items-center gap-1">
        {DAY_LABELS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={`btn btn-sm ${
              selectedDays.includes(value)
                ? 'btn-primary'
                : 'btn-outline-secondary'
            }`}
            onClick={() => toggleDay(value)}
            style={{ minWidth: '42px', padding: '2px 6px', fontSize: '0.8rem' }}
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          className={`btn btn-sm ms-1 ${
            allSelected ? 'btn-outline-primary' : 'btn-outline-secondary'
          }`}
          onClick={toggleAll}
          style={{ padding: '2px 6px', fontSize: '0.75rem' }}
        >
          All
        </button>
      </div>
    </div>
  )
}
