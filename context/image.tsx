'use client'
import React , { createContext , useState} from "react"
import { toast } from "react-hot-toast"

interface ImageType {
    imageUrl: string;
}

interface ImageContextType {
    imagePrompt: string;
    setImagePrompt: (query: string) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    generateImage: () => Promise<void>;
 
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({children} : {children: React.ReactNode}) => {
    const [imagePrompt, setImagePrompt] = useState("")
    const [loading , setLoading] = useState(false)

    const generateImage = async() => {
        console.log("Generating image");
        
        toast.success("Image has been generated with AI")
    }

    return(
        <ImageContext.Provider value={{imagePrompt, setImagePrompt ,loading, setLoading, generateImage}}>
            {children}
        </ImageContext.Provider>
    )
}

export const useImage = ():ImageContextType =>{
    const context = React.useContext(ImageContext)
    if(!context){
        throw new Error("useImage must be used within an ImageProvider")
    }
    return context;
    
}
