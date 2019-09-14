import { Button } from 'antd';
import Link from 'next/link';
import IfComp from 'if-comp';

const Home = () => (
  <>
    <h1>Hello Next.js</h1>
    <Link href='/user/list'>
      <Button type='primary'>UserList Page</Button>
    </Link>
    <IfComp
      expression={true}
      trueComp={
        <div style={{ marginTop: '20px' }}>
          Redux Counter Demo:
        </div>
      }
    />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </>
);
export default Home;
