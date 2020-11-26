import {useState} from 'react'

function Checkbox(props) {
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                {checked
                    ? props["labelActive"]
                    : props["labelInactive"]
                }
            </label>
        </div>
    )
}

export default Checkbox