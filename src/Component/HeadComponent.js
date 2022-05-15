import React from 'react'
import { PageHeader } from 'antd';


export default function HeadComponent() {
  return (
    <PageHeader
        className="site-page-header custom-header"
        onBack={() => null}
        title="Logo"
        subTitle="Kênh nhà cung cấp"
    />
  )
}
