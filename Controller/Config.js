class Config {
    constructor(id, data) {
        this.id = id;
        this.data = this.setData(data)
    }
    setData(json) {
        try {
            if(json.type === JSON) {
                return JSON.stringify(json)
            } else if(json.type === String) {
                return JSON.parse(json)
            }
        } catch (error) {
            throw new Error("El campo data no es valido")
        }
    }
}

module.exports = Config;