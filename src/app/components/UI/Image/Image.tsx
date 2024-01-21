import Image from 'next/image'
export const CustomImage:React.FC<{src:string, alt:string, sizes?:string, priority: boolean, quality: number}> = (props):JSX.Element => {
    return(
        <div style={{position:"absolute", width: "100%", height: "100%"}}>
            <Image
                src={props.src}
                sizes={props.sizes}
                fill
                priority={props.priority}
                alt={props.alt}
                quality={props.quality}
                style={{objectFit:"cover"}}
            />
      </div>
    )
}