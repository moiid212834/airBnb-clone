import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import Maps from '../../components/maps'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import React, {useState, useEffect} from 'react'
import { Tabs, Button } from 'antd';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { Meta } = Card;

const trips = ()=> {
  const router = useRouter();
  function callback(key) {
    console.log(key);
  }

  return (
    <Layout>
        <div className="navpadding bg-black"></div>
        <div className="container">
            <div className="my-4">
                <h2>Trips</h2>
            </div>
            <Tabs defaultActiveKey="1" onChange={callback} className="mb-4">
                <TabPane tab="Upcoming" key="1">
                <Card
                    className="shadow rounded"
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg"
                    />
                    }
                    actions={[
                    <Button>
                        Show More Trip Plans
                    </Button>
                    ]}
                >
                    <Meta
                    avatar={<Avatar src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg" />}
                    title="Place Name"
                    description="December 2, 2020"
                    />
                </Card>
                </TabPane>
                <TabPane tab="Past" key="2">
                <Card
                    className="shadow rounded"
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src="https://www.homelight.com/blog/wp-content/uploads/2019/06/front-yard-curb-appeal-.png"
                    />
                    }
                    actions={[
                    <Button>
                        Show More Trip Plans
                    </Button>
                    ]}
                >
                    <Meta
                    avatar={<Avatar src="https://www.homelight.com/blog/wp-content/uploads/2019/06/front-yard-curb-appeal-.png" />}
                    title="Place Name"
                    description="December 2, 2020"
                    />
                </Card>
                </TabPane>
                
            </Tabs>
        </div>  
    </Layout>
  )
}
export default trips;
