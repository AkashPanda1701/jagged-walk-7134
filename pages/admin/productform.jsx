import CreateForm from "../../Components/Admin/CreateForm"
import SidebarWithHeader from "../../Components/Admin/Sidebar"

function admin() {
    return (
        <>  
            <SidebarWithHeader >
                {<CreateForm/>}
            </SidebarWithHeader>

        </>
    )
}

export default admin