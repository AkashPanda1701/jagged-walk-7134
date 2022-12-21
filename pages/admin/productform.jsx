import CreateForm from "../../components/Admin/CreateForm"
import SidebarWithHeader from "../../components/Admin/Sidebar"

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