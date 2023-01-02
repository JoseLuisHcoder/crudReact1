import React from 'react'

const CardUsers = ({user, deleteUserById, setUpdateInfo}) => {
  return (
    <article>
        <ul>
            <li><span>Nombre: </span>{user.first_name} {user.last_name}</li>
            <li><span>Email: </span>{user.email}</li>
            <li><span>Birthday: </span>{user.birthday}</li>
        </ul>
        <footer>
            <button onClick={() => deleteUserById(user.id)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII="/></button>
            <button onClick={() => setUpdateInfo(user)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII="/></button>
        </footer>
    </article>
  )
}

export default CardUsers