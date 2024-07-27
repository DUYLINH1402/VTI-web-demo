import './showMessageErr.scss'
import { Input } from 'antd';

export const ShowMessageErr = ({refs, err, name, type = 'text' }) => {
    return (
        <>
            <Input
                name={name}
                status={err ? 'error' : 'success'}
                ref={refs}
                placeholder="please input title"
                type={type}
            />
            {err ? <span className="reuqired" >  {err?.message}</span> : null}
        </>
    )
}