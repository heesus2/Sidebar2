import { useState } from "react"

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    {/* <span>
                        <i className="bi bi-person-gear"></i>
                        프로필 변경
                    </span>
                    <span>
                        <i className="bi bi-person-circle"></i>
                        내 정보
                    </span>
                    <span>
                        <i className="bi bi-calendar3"></i>
                        나의 일정
                    </span> */}
                    <span onClick={() => setOpen(!open)}>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem key ={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
            </a>
        )
    }
}