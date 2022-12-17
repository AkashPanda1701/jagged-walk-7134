import SidebarWithHeader from "../../Components/Admin/Sidebar"
import Display from "../../Components/Admin/Display"
import ViewItem from "../../Components/Admin/ViewItem"


function admin() {
    return (
        <>  
            <SidebarWithHeader >
                {<ViewItem/>}
            </SidebarWithHeader>

        </>
    )
}

export default admin