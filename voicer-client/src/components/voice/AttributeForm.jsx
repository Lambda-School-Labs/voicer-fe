import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useInputControl } from "../../hooks/useInputControl"
import { DataContext } from "../../context/DataContext"
import { Button, Card, InputGroup, FormControl } from "react-bootstrap"
import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth"

const AttributeForm = () => {
  const [language, setLanguage] = useState({ language: "" })
  const [accent, setAccent] = useState({})
  const [otherAttribute, setOtherAttribute] = useState({})
  const [attributes, setAttributes] = useState([])

  const { refreshAppHandler, url } = useContext(DataContext)

  const languageInput = useInputControl("")
  const accentsInput = useInputControl("")
  const otherAttributesInput = useInputControl("")

  const handleLanguageChange = (e) => {
    setLanguage({ language: e.target.value })
    console.log(language)
  }

  const handleAccentChange = (e) => {
    setAccent({ accent: e.target.value })
    console.log(accent)
  }

  const handleOtherAttributesChange = (e) => {
    setOtherAttribute({ otherAttribute: e.target.value })
    console.log(otherAttribute)
  }

  return (
    <>
      <form>
        <InputGroup
          onChange={handleLanguageChange}
          className="mb-3 tags-text language"
          id="language"
        >
          <FormControl {...languageInput} placeholder="Language" />
        </InputGroup>

        <InputGroup
          onChange={handleAccentChange}
          className="mb-3 tags-text accents"
          id="accent"
        >
          <FormControl {...accentsInput} placeholder="Accents" />
        </InputGroup>
        <InputGroup
          onChange={handleOtherAttributesChange}
          className="mb-3 tags-text other-Attributes"
          id="other-attributes"
        >
          <FormControl
            {...otherAttributesInput}
            placeholder="Other Attributes"
          />
        </InputGroup>
      </form>
    </>
  )
}

export default AttributeForm
