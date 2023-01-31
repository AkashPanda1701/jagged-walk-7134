import SidebarWithHeader from "../../components/Admin/Sidebar"
import Display from "../../components/Admin/Display"
import ViewItem from "../../components/Admin/ViewItem"


function Admin() {
    return (
        <>  
            <SidebarWithHeader >
                {<ViewItem/>}
            </SidebarWithHeader>

        </>
    )
}

export default Admin