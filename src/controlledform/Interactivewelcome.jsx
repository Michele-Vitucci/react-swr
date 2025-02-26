function InteractiveWelcome() {
    const [name, setName] = useState("");
  
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Welcome name={name} />
      </div>
    );
  }
  