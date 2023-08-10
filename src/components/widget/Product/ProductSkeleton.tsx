import Skeleton from 'react-loading-skeleton'

import { Card } from '@/components/elements/Card'
import { metrics } from '@/styles/metrics'

interface ProductSkeletonProps {
  repeat?: number
}

export const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ repeat = 1 }) => {
  const array = Array.from(Array(repeat).keys())

  return (
    array.map((item) => (
        <Card key={`product-skeleton-${item}`} special={false} full={false}>
          <Skeleton height="260px" width='100%' style={{ marginBottom: metrics.space.s16 }}/>

          <Skeleton width='100%' height={metrics.font.size.large} />
          <Skeleton width='100%' height={metrics.font.size.regular} style={{ marginBottom: metrics.space.s16 }}/>
          <Skeleton width='40%' height={`${metrics.space.s42}`} style={{ marginBottom: metrics.space.s16 }}/>

          <Skeleton width='100%' height="42px"/>
        </Card>
    )
    )
  )
}
