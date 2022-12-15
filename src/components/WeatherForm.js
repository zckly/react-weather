function WeatherForm({
  latInput,
  longInput,
  handleLatChange,
  handleLongChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="pb-16 flex gap-x-4">
      <input
        className="px-3 py-2 border rounded-lg"
        type="text"
        placeholder="Latitude"
        value={latInput}
        onChange={handleLatChange}
      />
      <input
        className="px-3 py-2 border rounded-lg"
        type="text"
        placeholder="Longitude"
        value={longInput}
        onChange={handleLongChange}
      />
      <button
        className="bg-gray-900 text-white px-3 py-2 rounded-lg"
        type="submit"
      >
        Get weather
      </button>
    </form>
  );
}

export default WeatherForm;
