import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import { Card } from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
function HomePage(){
    return(
        <div className="center">
            <h1>I build this page with next.js</h1>
            <br></br>
            <h2 className='italic'>Next features</h2>
            <div className='grid'>
                
                <Card variant="outlined" className='costum-card'>
                    <GppGoodIcon  sx={{ fontSize: 60 }}className='icon'  />
                    <h1>high security</h1>
                </Card>
                <Card variant="outlined" className='costum-card'>
                    <ElectricBoltOutlinedIcon   sx={{ fontSize: 60 }}className='icon' />
                    <h1>Fast</h1>
                </Card>
                <Card variant="outlined" className='costum-card'>
                    <LocalFireDepartmentIcon  sx={{ fontSize: 60 }}className='icon'  />
                    <h1>Hot Reload</h1>
                </Card>
            </div>
            <br/>
            <Button href="https://github.com/AmirAli-Er/NextProject" variant='outlined' startIcon={<GitHubIcon></GitHubIcon>} className='btn'>My Github</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <p>developed with amirali erfani</p>
        </div>
    )
}

export default HomePage