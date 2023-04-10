'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Button, { ButtonProps } from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import fetchJson from '@/lib/fetchJson'
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { useRouter } from "next/navigation";
import useLoginModal from "@/hooks/useLoginModal";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
	sx?: any
}
const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<number>(1);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      open_id: ''
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = 
  async(data) => {
		console.log(data)
		setIsLoading(true);
		const res:any =await fetchJson('/api/web/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({id: data.open_id})
		})
		
		if (res.token) {
			toast.success('登录成功！');
		}
    setIsLoading(false);
  }
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#33cbb7',
    '&:hover': {
      backgroundColor: '#00bfa5',
    },
  }));
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
	function TabPanel(props: TabPanelProps) {
		const { children, value, index, sx, ...other } = props;
	
		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={sx || { p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		)
	}
  return (
    <Dialog open={loginModal.isOpen} onClose={loginModal.onClose} sx={{minWidth: 400}}>
        <DialogTitle sx={{textAlign: 'center', fontSize: '24px', color: '#484848', p: {xs: 2, md: 3}}}>登录</DialogTitle>
        <DialogContent
         sx={{padding: {xs: 2, md: 3}}}
        >
					<Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth: 400}}>
						<Tabs onChange={handleChange} value={value} aria-label="lab API tabs example">
							<Tab label="用户ID登录" value={1} />
							<Tab label="小程序扫描" value={2} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={1} sx={{padding: '24px 0'}}>
						<TextField {...register("open_id", { required: "用户ID不能为空！" })} name="open_id" sx={{width: '415px'}} required id="open_id" label="用户ID" variant="outlined" />
						{errors['open_id'] ? <Box sx={{color: 'red'}}>不能为空！</Box> : null}
					</TabPanel>
					<TabPanel value={value} index={2}>
						<DialogContentText sx={{textAlign: 'center'}}>
							使用微信扫描小程序，请在小程序用户信息页面获取用户ID
						</DialogContentText>
						<Box
							component="img"
							alt="小程序"
							src="/images/wechat.jpg"
							sx={{
								margin: '0 auto',
								display: 'block',
								width: {xs: 100, md: 160},
								height: {xs: 100, md: 160},
								borderRadius: '50%',
							}}
						/>
					</TabPanel>
        </DialogContent>
        <DialogActions
            sx={{justifyContent: 'center', p: {xs: 2, md: 3}}}
        >
          <ColorButton sx={{width: '100%', height: '46px'}} variant="contained" disabled={isLoading} type="submit"  onClick={handleSubmit(onSubmit)}>提交</ColorButton>
        </DialogActions>
      </Dialog>
  );
}

export default LoginModal;
